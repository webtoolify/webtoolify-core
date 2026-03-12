/**
 * WebToolify Core Logic - SHA-256 Hashing
 * This function runs 100% locally in the browser using the Web Crypto API.
 */
async function generateSHA256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export { generateSHA256 };
