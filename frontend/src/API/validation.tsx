
import {ROOM_OBJECT_SET, type Room} from "../types"


export const validateRoom = (room: unknown): room is Room => 
    {

    if (!Array.isArray(room))
    {
        return false;
    }

    
    if (room.length === 0)
    {
        return false;
    }

    if(!Array.isArray(room[0]))
    {
        return false;
    }

    const width = room[0].length

    if (width === 0)
    {
        return false;
    }

    for (const row of room)
    {       

            if (!Array.isArray(row))
            {
                return false;
            }

            if (row.length !== width)
            {
                return false;
            }
            for (const char of row)
            {
                if (typeof(char) !== "string")
                {
                    return false;
                }
                if (!ROOM_OBJECT_SET.has(char))
                {
                    return false;
                }
            }
    }
    
    return true;
};