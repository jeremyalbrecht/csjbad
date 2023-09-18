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
    contacts(filters: {active: {eq: true}}) {
        data {
            attributes {
                title
                action
            }
        }
    }
}`
