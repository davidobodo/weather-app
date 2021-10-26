/**
 *
 * @param identifier Variable to store data in local storage as
 * @param payload Value to be stored
 */

export const setLocalStorage = (identifier: string, payload: unknown): void => {
    localStorage.setItem(identifier, JSON.stringify(payload));
};

/**
 *
 * @param identifier Variable to clear from local storage
 */
export const clearLocalStorage = (identifier: string): void => {
    localStorage.removeItem(identifier);
};

/**
 *
 * @param identifier Variable to access data  from local storage
 */
export const getLocalStorage = (identifier: string): unknown | null => {
    const info = localStorage.getItem(identifier);
    if (!!info) {
        return JSON.parse(info);
    } else {
        return null;
    }
};
