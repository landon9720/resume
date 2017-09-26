const fs = require('fs')
const Mustache = require('mustache')
const autolinks = require('autolinks')

// recursively mutate data with 'autolinks'
const recursiveAutolink = (data, format) => {
  const f = data => {
    for (const key in data) {
      if (typeof data[key] === 'string') {
        data[key] = autolinks(data[key], format)
      } else if (Array.isArray(data[key])) {
        data[key].forEach(f)
      } else if (typeof data[key] === 'object') {
        f(data[key])
      }
    }
    return data
  }
  return f(data)
}

const generateResume = (format, template, output) => {
  const data = recursiveAutolink(JSON.parse(fs.readFileSync('data.json')), format)
  const viewMarkdown = fs.readFileSync(template, 'utf8')
  fs.writeFileSync(output, Mustache.render(viewMarkdown, data))
}

generateResume('markdown', 'view_markdown.mustache', 'README.md')
generateResume('html', 'view_html.mustache', 'resume.html')
