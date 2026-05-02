import { describe, it, expect } from 'vitest';
import { findFAQMatch, findRouteMatch } from '../../utils/intentMatcher';
import { ROUTES } from '../../lib/routes';

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

  it('should match status route for "track" keyword', () => {
    const match = findRouteMatch('track my application');
    expect(match.route).toBe(ROUTES.STATUS);
  });

  it('should match voter list route for "electoral roll" keyword', () => {
    const match = findRouteMatch('search electoral roll');
    expect(match.route).toBe(ROUTES.CHECK_VOTER_LIST);
  });

  it('should match update route for "correct details" keyword', () => {
    const match = findRouteMatch('correct details');
    expect(match.route).toBe(ROUTES.UPDATE_DETAILS);
  });

  it('should match voting process route for "evm" keyword', () => {
    const match = findRouteMatch('how to use evm');
    expect(match.route).toBe(ROUTES.VOTING_PROCESS);
  });

  it('should match learn elections route for "how it works" keyword', () => {
    const match = findRouteMatch('how it works');
    expect(match.route).toBe(ROUTES.HOW_ELECTIONS_WORK);
  });

  it('should match updates route for "latest news" keyword', () => {
    const match = findRouteMatch('latest news');
    expect(match.route).toBe(ROUTES.UPDATES);
  });

  it('should match faq route for "help" keyword', () => {
    const match = findRouteMatch('I need help');
    expect(match.route).toBe(ROUTES.FAQ);
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

  it('should return null for empty or null query', () => {
    expect(findFAQMatch('')).toBeNull();
    expect(findFAQMatch(null)).toBeNull();
    expect(findRouteMatch('')).toBeNull();
    expect(findRouteMatch(null)).toBeNull();
  });
});
