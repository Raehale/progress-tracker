import { contributorsArray } from "./contributors.js"

const contributorSection = document.getElementById("contributors-main-section")

// Function to run through all contributors in contributorsArray and create their card from the below template literal
(function appendContributorsHtml() {
    console.log(renderContributorsHtml())
    contributorSection.innerHTML = `${[...renderContributorsHtml()]}`
})()

function renderContributorsHtml() {
    let contributors = ''
    let contributorsHtmlArr = []

    contributorsHtmlArr = contributorsArray.map(contributor => {
        renderAvatarHtml()
        renderGitHubHtml(contributor.gitHub)
        renderLinkedInHtml(contributor.linkedIn)

        return `<article class="contributor-card">

                    <h2>${contributor.name}</h2>
                    <br />

                    <div class="avatar-container">
                        ${contributorAvatar}
                    </div>

                    <br />

                    <h3>Find this contributor on:</h3>
                    <span class="social-links">
                        ${gitHub}
                        ${linkedIn}
                    </span>
                </article>
            `
    })

    return contributorsHtmlArr
}

function renderAvatarHtml(avatarSrc, avatarAlt) {
    let contributorAvatar = ''
    if (contributor.avatar) {
        contributorAvatar = `<img class="contributor-avatar" src="${avatarSrc}" alt="${avatarAlt}" />`
    } else {
        contributorAvatar = `<img class="contributor-avatar" src="/assets/images/contributors/placeholder-avatar.jpg" alt="placeholder avatar"/>`
    }
}

function renderLinkedInHtml(linkedInUrl) {
    let linkedIn = ''
    if (contributor.linkedIn) {
        linkedIn = `<a href="${linkedInUrl}" aria-label="linked-in">
                        <i class="fa-brands fa-linkedin-in fa-2x social-icon" aria-hidden="true"></i>
                    </a>`
    }
}

function renderGitHubHtml(gitHubUrl) {
    let gitHub = ''
    if (gitHubUrl) {
        gitHub = `<a href="${gitHubUrl}" class="contributor-github" aria-label="github">`
    }
}