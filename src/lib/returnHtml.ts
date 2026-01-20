import sanitize from "sanitize-html"
import parse from "html-react-parser"

export const returnHtml = (html: string) => {
  const sanitizedText = sanitize(html, {
    allowedTags: sanitize.defaults.allowedTags.concat([ 'img' ])
  })
  return parse(sanitizedText)
}