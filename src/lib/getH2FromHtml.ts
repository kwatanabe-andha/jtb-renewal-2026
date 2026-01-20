import * as cheerio from 'cheerio'

export function getH2FromHtml(html: string): string[] {
  const $ = cheerio.load(html);
  return $('h2').map((_, el) => $(el).text()).get();
}