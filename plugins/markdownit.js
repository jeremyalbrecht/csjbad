import md from 'markdown-it'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      md: (str) => {
        if (!str) return

        const markdown = md({breaks: true, html: true})

        return markdown.render(str)
      }
    }
  }
})
