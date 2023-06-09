/**
 * Represents a string key, a unique identifier for a source string.
 */
export type TranslationStringKey = string & { readonly _brand: unique symbol; };

/**
 * Asserts that a string is a valid string key.
 * @param key The string to assert.
 * @throws {Error} If the string is not a valid string key.
 * @example assertValidStringKey("foo.bar.baz"); // valid
 * @example assertValidStringKey("foo.bar."); // invalid
 * @example assertValidStringKey(".foo.bar"); // invalid
 * @example assertValidStringKey("foo..bar"); // invalid
 */
export function assertValidTranslationStringKey(key: string): asserts key is TranslationStringKey {
	if(key.split(".").some(e => !e)) throw new Error(`Invalid string key: ${key}`);
}
