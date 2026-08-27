export interface TeamMember {
  name: string;
  role: string;
  /** Optional headshot. Import it from src/assets and pass it in. */
  photo?: string;
}

/**
 * Deliberately empty.
 *
 * These are real people at a real business, so the names, roles and faces have
 * to come from the manager rather than be invented here. Add them to this array
 * and the Our Team page fills itself in — no other change needed.
 */
export const TEAM: TeamMember[] = [];
