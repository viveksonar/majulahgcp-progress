
export type QwiklabsProfileBadge = {
    title: string;
    earnedDateStr: string;
};

export type QwiklabsProfileUser = {
    name: string;
    imageUrl: string;
    profileText: string;
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
    title: string,
    questRequirements: number;
    rewards: string;
    rewardsUrl: string;
}
