export interface IGameInfo {
    game_version: string;
    tanks_updated_at: number;
    languages: {[key: string]: string};
    vehicle_crew_roles: {[key: string]: string};
    achievement_sections: {[key: string]: IAchievementGroup };
    vehicle_types: {[key: string]: string};
    vehicle_nations: {[key: string]: string};
}

export interface IAchievementGroup {
    name: string;
    order: number;
}
