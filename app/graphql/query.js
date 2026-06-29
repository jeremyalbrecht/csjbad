export const sponsorQuery = `
query sponsors {
  sponsors(filters: {active: {eq: true}}) {
          logo {
                      url
                      alternativeText
          }
              }
    }`

export const contactQuery = `
query contacts {
  contacts(filters: {active: {eq: true}}) {
      title
      action
    }
}`

export const shopQuery = `
query Shop {
  shop {
        items {
          title
          price
          image {
                alternativeText
                url
              }
            }
        description
      }
}`

export const homePageQuery = `
query HomePage {
    homePage {
                hero_small_title
                hero_big_title
                hero_description
                hero_button
                hero_action
                events {
                    id
                    date
                    title
                    content
                }
                articles {
                    id
                    title
                    content
                    button_title
                    button_url
                    openNewTab
                    showImageOnMobile
                    image {
                                url
                                alternativeText
                    }
                }
            }

}`

export const clubQuery = `
query Club {
  club {
        articles {
          title
          content
          image {
                url
                caption
                alternativeText
          }
          button_url
          button_title
          openNewTab
          showImageOnMobile
        }
        comiteeMembers(pagination: { pageSize: 50 }) {
          name
          function
          description
          image {
                      alternativeText
                      url
                      caption
          }
      }
      }
}`

export const adultesQuery = `
query Adulte {
  adulte {
        button_title
        button_action
        creneaux {
          title
          subtitle
          day
          color
        }
        tarifs
        files {
              name
              ext
              size
              url
              caption
        }
        trainers {
          name
          function
          description
          image {
                alternativeText
                url
          }
      }
        license {
            name
            price
            description
        }
        steps {
            description
            icon
            button_action
            button_title
            button_icon
        }
  }
}`

export const eventsQuery = `
  query VieDuClub {
  vieDuClub {
        teams(pagination: { pageSize: 50 }) {
          ranking
          color
          major
          season {
              name
              default
          }
          leaderboard {
              competition_id
              rows {
                  club
                  won
                  lost
                  total
              }
          }
          image {
                alternativeText
                url
          }
          images {
                alternativeText
                url
          }
      }
      }
}`

export const doubleJeuQuery = `
  query DoubleJeu {
  doubleJeu {
                sections {
                    id
                    title
                    articles {
                        title
                        content
                        button_title
                        button_url
                        showImageOnMobile
                        openNewTab
                        image {
                                    alternativeText
                                    url
                        }
                    }
                }
    }
}`

export const seasonsQuery = `
query Seasons {
    seasons {
                name
                default
    }
}`

export const faqQuery = `
query Faq {
    faqs(sort: "order:asc", pagination: { pageSize: 50 }) {
        question
        answer
        order
    }
}`
