import { load } from "cheerio"

/**
 * getFirstParagraph gets first <p> tag value from html
 * if it does not exist then returns html stripped from tags
 * @param  {string} html
 * @returns string free of any html tags
 */
export function getFirstParagraph(html: string): string {
  const $ = load(`<html> ${html} </html>`)
  const paragraphs: string[] = []

  $("p").each(function (_i, _el) {
    paragraphs.push($(this).text())
  })

  const firstNotEmtpy = paragraphs.find((paragraph) => paragraph.trim() !== "")
  return firstNotEmtpy ?? $.text()
}
