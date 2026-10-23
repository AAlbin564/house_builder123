

export type Room = RoomObject[][]

export const ROOM_OBJECTS = ["@", "_", "(", "|"] as const;

export type RoomObject = typeof ROOM_OBJECTS[number];

export const ROOM_OBJECT_SET: ReadonlySet<string> = new Set(ROOM_OBJECTS); 
