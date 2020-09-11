
export type QwiklabsProfileBadge = {
    title: string;
    earnedDateStr: string;
};

export type QwiklabsProfileUser = {
    name: string;
    imageUrl: string;
};

export type FetchQwiklabsProfileStatus = {
    user: QwiklabsProfileUser;
    badges: QwiklabsProfileBadge[];
    error: Error;
};

export type QwiklabsQuestBadge = {
    title: string;
    image: string;
    link: string;
};

export type QwiklabsTier = {
    questRequirements: number;
    rewards: string;
}
