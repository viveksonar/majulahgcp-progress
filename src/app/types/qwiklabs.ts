
export type QwiklabsBadge = {
    title: string;
    earnedDateStr: string;
};

export type QwiklabsUser = {
    name: string;
    imageUrl: string;
};

export type FetchQwiklabsProfileStatus = {
    user: QwiklabsUser;
    badges: QwiklabsBadge[];
    error: Error;
};
