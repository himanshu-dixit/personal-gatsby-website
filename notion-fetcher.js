const { Client } = require("@notionhq/client")
const fs = require('fs');

// Initializing a client
const notion = new Client({
  // auth: process.env.NOTION_TOKEN,
  auth: "secret_OjDmEsINQmskjO7ima9XCDYSj5sDMVGolx9bEN7z7KO"
})

async function getPagesInDB() {
  const pagesByID = (await notion.databases.query({
    database_id: "a23022c1-9fa0-4b20-a4ca-5434eb4c1c9f",
  })).results.map(({id})=> id)

  return pagesByID;
}

function getTextFromBlocks(blocks) {

  let content = "";

  for (const block of blocks) {

    content = content.concat(parseBlockForText(block));

    content  = content.concat(parseBlockForHeading(block));

  }


  return content;
}

function parseBlockForHeading(block) {
  let content = "";
  for (let i = 1; i <= 6; i++) {
    const parsedHeading = block[`heading_${i}`]?.text.map((textObject) => {
      return `${textObject["plain_text"]}`;
    });

    if (parsedHeading?.length > 0 && typeof (parsedHeading) !== undefined) {
      const headingWithNewLine = `##${parsedHeading.join("\n")}\n`
      content = content.concat(headingWithNewLine);
    }
  }

  return content;
}

function parseBlockForText(block) {
  let content = ""
  const parsedText = block.paragraph?.text.map((textObject) => `${textObject["plain_text"]}`);

  if (parsedText?.length > 0 && typeof (parsedText) !== undefined) {
    const heading = `${parsedText.join("\n")}\n`
    content = content.concat(heading);
  }
  return content;
}

async function generateMarkDownFromInfo(page, block) {

  const title = page.properties["Name"].title[0].text.content;

  const date = page.properties["date"]?.date.start || "";
  const description = page.properties["description"]["rich_text"]?.[0].text.content || "";
  const type = page.properties["type"].select.name;
  const blocksResult = block.results;
  const tags = page.properties["tags"]["multi_select"].map(({ name }) => name.toLowerCase()).toString();


  const content = getTextFromBlocks(blocksResult)


  const result = `---
  title: ${title}
  date: "${date}"
  type: ${type}
  description: ${description}
  tags: [${tags}]
---
${content}
  `
  return result;

}

async function fetchAndCreatePage(pageId) {

  const page = await notion.pages.retrieve({
    page_id: pageId
  })

  const block = await notion.blocks.children.list({ block_id: pageId });


  const content = await generateMarkDownFromInfo(page, block);
  const slug = page.properties["slug"]["rich_text"]?.[0].text.content || "";
  const type = page.properties["type"].select.name;

  if(type==="draft") return

  try {
    await fs.writeFileSync(`./content/blog/${slug}.md`, content)
    console.log("Writing file for ",slug)
  }
  catch (e) {
    console.error("Error saving md file for ",slug, e)
  }
}

async function callNotionAndCreatePages() {
  const pagesByID = await getPagesInDB();
  for (const pageId of pagesByID) {
    fetchAndCreatePage(pageId)
  }
}

callNotionAndCreatePages()
