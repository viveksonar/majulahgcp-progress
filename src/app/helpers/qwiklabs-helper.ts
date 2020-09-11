import { QwiklabsBadge, QwiklabsUser, FetchQwiklabsProfileStatus } from  '@app/types/qwiklabs';

const HTTP_PROTOCOL = 'http';
const HTTPS_PROTOCOL = 'https';
const PROFILE_LINK_REGEX = /^(?:(?:https|http)\:\/\/|)(?:www|google)\.qwiklabs\.com\/public_profiles\/[a-zA-Z0-9-]+$/
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com';

export default class QwiklabsHelper {
    static isProfileLinkCorrect(link: string): boolean {
        if (link.match(PROFILE_LINK_REGEX)) {
            return true;
        }

        return false;
    }

    static isLinkStartsWithProtocol(link: string): boolean {
        const result = link.startsWith(HTTP_PROTOCOL) || link.startsWith(HTTPS_PROTOCOL);

        return result;
    }

    static async created(): Promise<string> {
        return await Promise.resolve("OK");
    }

    private static getProfileUserFrom(doc: Document): QwiklabsUser {
        const mainWrapper = doc.getElementById('main-wrapper');
        const profileCollection = mainWrapper.getElementsByClassName('public-profile__hero')

        if (profileCollection.length === 0) {
            return {
                name: '',
                imageUrl: '',
            };
        }

        const profileWrapper = profileCollection[0];
        const avatarCollection = profileWrapper.getElementsByClassName('avatar');

        if (avatarCollection.length === 0) {
            return {
                name: '',
                imageUrl: '',
            };
        }

        const avatarElement = avatarCollection[0];
        const profileLines = profileWrapper.getElementsByClassName('l-mbm');

        if (profileLines.length === 0) {
            return {
                name: '',
                imageUrl: '',
            };
        }

        const nameElement = profileLines[0];
        const name = (nameElement as HTMLElement).innerText;
        const parsedName = name.replace(/\r|\n/g, '');
        return {
            name: parsedName,
            imageUrl: (avatarElement as HTMLImageElement).src,
        }
    }

    static async getProfileFrom(link: string): Promise<void|FetchQwiklabsProfileStatus> {
        let currentLink = link;

        if (!this.isProfileLinkCorrect(currentLink)) {
            throw new Error('Don\'t give me links without verification pls :(');
        }

        if (!this.isLinkStartsWithProtocol(currentLink)) {
            currentLink = `https://${currentLink}`;
        }

        let result: FetchQwiklabsProfileStatus;
        try {
            const fetchedResponse = await fetch(`${CORS_PROXY}/${currentLink}`);
            const responseText = await fetchedResponse.text();
            const responseDoc = new DOMParser().parseFromString(responseText, "text/html");

            result = {
                user: this.getProfileUserFrom(responseDoc),
                badges: [],
                error: null,
            }

        } catch (e) {
            const errUser: QwiklabsUser = {
                name: '',
                imageUrl: '',
            };

            result = {
                user: errUser,
                badges: [],
                error: e, 
            };
        }

        return result;
    }


    // fetch(url).then((res) => { console.log(res) })
}