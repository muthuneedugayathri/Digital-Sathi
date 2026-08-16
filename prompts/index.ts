import rawSystemPrompt from './system_prompt.md?raw';

/**
 * PROMPT_VERSION tracks system prompt iterations.
 * MUST be incremented whenever system_prompt.md wording is modified.
 */
export const PROMPT_VERSION = 'v1.4';

/**
 * Loaded system prompt content from system_prompt.md
 */
export const SYSTEM_PROMPT = rawSystemPrompt.trim();
