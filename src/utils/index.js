//标签标题
export const defaultDocumentTitle = '实验室管理系统'

export function getDocumentTitle(pageTitle) {
  if (pageTitle) return `${defaultDocumentTitle} - ${pageTitle}`
  return `${defaultDocumentTitle}`
}
