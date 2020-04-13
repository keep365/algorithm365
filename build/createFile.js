const path = require('path')
const fs = require('fs')

const args = process.argv.slice(2)

const TPL_1_NAME = '1.mjs'
const TPL_INDEX_NAME = 'index.mjs'
const TPL_NOTE_NAME = 'note.md'

const TPL_1_DIR = buildDir(`./${TPL_1_NAME}.tpl`)
const TPL_INDEX_DIR = buildDir(`./${TPL_INDEX_NAME}.tpl`)
const TPL_NOTE_DIR = buildDir(`./${TPL_NOTE_NAME}.tpl`)

function resolve(...args) {
  console.log('>>>resolve', ...args)
  return path.resolve(__dirname, ...args)
}

function buildDir(...s) {
  return resolve('./', ...s)
}

function outputDir(...s) {
  return resolve('../src', ...s)
}

function createFolder(dir) {
  console.log('>>>createFolder', dir)
  fs.mkdirSync(dir)
  console.log(`<<<<< ${dir} created.`)
}

function readFile(dir) {
  console.log('>>>readFile', dir)
  const cont = fs.readFileSync(dir, { encoding: 'utf8' })
  console.log('>>>readFile end', dir)
  return cont
}

function createFile(dir, cont) {
  console.log('>>>createFile', dir)
  console.log(cont)
  fs.writeFileSync(dir, cont)
  console.log(`<<<<< ${dir} created.`)
}

/**
- src
  - 1.towSum
    - 1.mjs
    - index.mjs
    - node.md
 */
/**
 *
 * @param {string} index 序号
 * @param {string} name 函数名，文件夹名
 * @param {string} title md 中文标题名
 * @param {string} link leetcode 链接
 */
function run(index, name, title, link) {
  console.log('>>>run', index, name, title, link)
  const folderName = `${index}.${name}`
  const titleName = `${index}.${title}`

  const folderDir = outputDir(folderName)
  createFolder(folderDir)

  // make 1.mjs
  const oneTpl = buildDir(TPL_1_DIR)
  let onecont = readFile(oneTpl)
  onecont = onecont.replace(/\[name\]/g, name)

  const oneOutput = outputDir(folderName, TPL_1_NAME)
  createFile(oneOutput, onecont)

  // make index.mjs
  const indexTpl = buildDir(TPL_INDEX_DIR)
  let indexcont = readFile(indexTpl)
  indexcont = indexcont.replace(/\[name\]/g, name)

  const indexOutput = outputDir(folderName, TPL_INDEX_NAME)
  createFile(indexOutput, indexcont)

  // make note.md
  const noteTpl = buildDir(TPL_NOTE_DIR)
  let notecont = readFile(noteTpl)
  notecont = notecont.replace(/\[index\].\[title\]/g, titleName)
  notecont = notecont.replace(/\[link\]/g, link)

  const noteOutput = outputDir(folderName, TPL_NOTE_NAME)
  createFile(noteOutput, notecont)
}

run(...args)
