export const sponsorQuery = `
query sponsors {
  sponsors(filters: {active: {eq: true}}) {
          data {
              id
              attributes {
                  logo {
                      data {
                          attributes {
                              url
                          }
                      }
                  }
              }
          }
      }
    }`

export const contactQuery = `
query contacts {
  contacts(filters: {active: {eq: true}}) {
  data {
    attributes {
      title
      action
    }
  }
}
}`

export const homePageQuery = `
query HomePage {
    homePage {
        data {
            attributes {
                hero_small_title
                hero_big_title
                hero_description
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
                    image {
                        data {
                            attributes {
                                name
                                hash
                                ext
                                url
                            }
                        }
                    }
                }
            }
        }
    }
}`

export const clubQuery = `
query Club {
  club {
    data {
      attributes {
        articles {
          title
          content
          image {
            data {
              attributes {
                url
              }
            }
          }
          button_url
          button_title
        }
      }
    }
  }
}`

export const adultesQuery = `
query Adulte {
  adulte {
    data {
      attributes {
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
          data {
            attributes {
              name
              ext
              size
              url
            }
          }
        }
        license {
            name
            price
            description
        }
      }
    }
  }
}`

export const eventsQuery = `
  query VieDuClub {
  vieDuClub {
    data {
      attributes {
        events {
          date
          title
          content
          image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
}`