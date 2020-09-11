
const HTTP_PROTOCOL = 'http';
const HTTPS_PROTOCOL = 'https';
const PROFILE_LINK_REGEX = /^(?:(?:https|http)\:\/\/|)(?:www|google)\.qwiklabs\.com\/public_profiles\/[a-zA-Z0-9-]+$/

export default class QwiklabsLinkVerifier {
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
}