import { createContext, useState, ReactNode, use } from "react";
import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  ChallengesCompleted: number;
  activeChallenge: Challenge | null;
  startNewChallenge: () => void;
  levelUp: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [ChallengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge as Challenge);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        ChallengesCompleted,
        startNewChallenge,
        levelUp,
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
