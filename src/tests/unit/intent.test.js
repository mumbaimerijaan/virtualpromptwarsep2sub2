import { describe, it, expect } from 'vitest';
import { findFAQMatch, findRouteMatch } from '../../utils/intentMatcher';

describe('Intent Matcher Logic', () => {
  it('should match FAQ for EPIC query', () => {
    const match = findFAQMatch('What is EPIC?');
    expect(match).toBeDefined();
    expect(match.question.toLowerCase()).toContain('epic');
  });

  it('should match registration route for "register" keyword', () => {
    const match = findRouteMatch('I want to register');
    expect(match).toBeDefined();
    expect(match.title).toBe('Register as a Voter');
  });

  it('should return null for unrelated queries', () => {
    const match = findFAQMatch('How to cook pasta?');
    expect(match).toBeNull();
  });

  it('should handle garbage input gracefully', () => {
    const match = findFAQMatch('!@#$%^&*()_+');
    expect(match).toBeNull();
  });

  it('should handle injection-like strings safely', () => {
    const match = findRouteMatch('<script>alert("xss")</script>');
    expect(match).toBeNull();
  });

  it('should handle very long strings without crashing', () => {
    const longString = 'a'.repeat(1000);
    const match = findFAQMatch(longString);
    expect(match).toBeNull();
  });
});
