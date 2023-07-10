import { solveEngraving } from "@/common/EngravingSolver";
import {
  AbilityStoneType,
  AccessoryNames,
  AccessoryType,
  CalculationResultType,
  EarringType,
  EffectType,
  EngravingAccessoryType,
  EngravingType,
  NecklanceType,
  RingType,
} from "@/types";
const mockData: CalculationResultType[] = [
  {
    mainSet: [
      {
        id: 0,
        engraving1: { name: "Keen Blunt Weapon", nodes: 6 },
        engraving2: { name: "Keen Blunt Weapon", nodes: 3 },
        effect1: { name: "crit", value: 263 },
        effect2: { name: "spec", value: 263 },
        type: AccessoryNames.NeckLance,
      },
      {
        id: 2,
        engraving1: { name: "Hit Master", nodes: 6 },
        engraving2: { name: "Grudge", nodes: 3 },
        effect1: { name: "crit", value: 70 },
        effect2: { name: "stub", value: 0 },
        type: AccessoryNames.Earring,
      },
      {
        id: 3,
        engraving1: { name: "Keen Blunt Weapon", nodes: 6 },
        engraving2: { name: "Cursed Doll", nodes: 3 },
        effect1: { name: "spec", value: 247 },
        effect2: { name: "stub", value: 0 },
        type: AccessoryNames.Earring,
      },
      {
        id: 3,
        engraving1: { name: "Keen Blunt Weapon", nodes: 6 },
        engraving2: { name: "Cursed Doll", nodes: 3 },
        effect1: { name: "spec", value: 247 },
        effect2: { name: "stub", value: 0 },
        type: AccessoryNames.Ring,
      },
      {
        id: 15,
        engraving1: { name: "PeaceMaker", nodes: 6 },
        engraving2: { name: "Keen Blunt Weapon", nodes: 3 },
        effect1: { name: "spec", value: 5 },
        effect2: { name: "stub", value: 0 },
        type: AccessoryNames.Ring,
      },
      {
        engraving1: { name: "stub", nodes: 0 },
        engraving2: { name: "stub", nodes: 0 },
        effect1: { name: "stub", value: 0 },
        effect2: { name: "stub", value: 0 },
        type: AccessoryNames.Stub,
      },
      {
        id: 0,
        engraving1: { name: "Grudge", nodes: 12 },
        engraving2: { name: "stub", nodes: 0 },
        effect1: { name: "stub", value: 0 },
        effect2: { name: "stub", value: 0 },
        type: AccessoryNames.Engraving,
      },
      {
        id: 1,
        engraving1: { name: "Hit Master", nodes: 12 },
        engraving2: { name: "stub", nodes: 0 },
        effect1: { name: "stub", value: 0 },
        effect2: { name: "stub", value: 0 },
        type: AccessoryNames.Engraving,
      },
    ],
    alternativeSet: [
      [
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "PeaceMaker",
            nodes: 10,
          },
          engraving2: {
            name: "Cursed Doll",
            nodes: 10,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.AbilityStone,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
      ],
      [
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "Cursed Doll",
            nodes: 10,
          },
          engraving2: {
            name: "PeaceMaker",
            nodes: 10,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.AbilityStone,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
        {
          engraving1: {
            name: "stub",
            nodes: 0,
          },
          engraving2: {
            name: "stub",
            nodes: 0,
          },
          effect1: {
            name: "stub",
            value: 0,
          },
          effect2: {
            name: "stub",
            value: 0,
          },
          type: AccessoryNames.Stub,
        },
      ],
    ],
  },
];
type GearType =
  | "abilityStone"
  | "necklance"
  | "engraving1"
  | "engraving2"
  | "earring1"
  | "earring2"
  | "ring1"
  | "ring2";

self.onmessage = (
  event: MessageEvent<{
    targetEffects: EffectType[];
    targetEngravings: EngravingType[];
    ignoreSlots: GearType[];
    accessories: AccessoryType[];
  }>
) => {
  const { data } = event;
  console.log(data);
  const { targetEffects, targetEngravings, ignoreSlots, accessories } = data;
  const abilityStoneSet: AbilityStoneType[] = [];
  const necklanceSet: NecklanceType[] = [];
  const engravingSet: EngravingAccessoryType[] = [];
  const earringSet: EarringType[] = [];
  const ringSet: RingType[] = [];

  let ignoreAbilityStone = 0,
    ignoreRing = 0,
    ignoreEarring = 0,
    ignoreNecklace = 0,
    ignoreEngraving = 0;
  for (const accessory of accessories) {
    if (accessory.type === AccessoryNames.AbilityStone) {
      abilityStoneSet.push(accessory as AbilityStoneType);
    } else if (accessory.type == AccessoryNames.NeckLance) {
      necklanceSet.push(accessory as NecklanceType);
    } else if (accessory.type == AccessoryNames.Engraving) {
      engravingSet.push(accessory as EngravingAccessoryType);
    } else if (accessory.type == AccessoryNames.Earring) {
      earringSet.push(accessory as EarringType);
    } else if (accessory.type == AccessoryNames.Ring) {
      ringSet.push(accessory as RingType);
    }
  }
  for (const ignoreSlot of ignoreSlots) {
    if (ignoreSlot == "abilityStone") {
      ignoreAbilityStone += 1;
    } else if (ignoreSlot == "necklance") {
      ignoreNecklace += 1;
    } else if (ignoreSlot == "engraving1" || ignoreSlot == "engraving2") {
      ignoreEngraving += 1;
    } else if (ignoreSlot == "earring1" || ignoreSlot == "earring2") {
      ignoreEarring += 1;
    } else if (ignoreSlot == "ring1" || ignoreSlot == "ring2") {
      ignoreRing += 1;
    }
  }
  console.log(targetEffects);
  console.log(targetEngravings);
  console.log(abilityStoneSet);
  console.log(ringSet);
  console.log(necklanceSet);
  console.log(earringSet);
  console.log(engravingSet);
  console.log(ignoreAbilityStone);
  console.log(ignoreRing);
  console.log(ignoreNecklace);
  console.log(ignoreEarring);
  console.log(ignoreEngraving);

  let result = solveEngraving({
    targetEngravings,
    targetEffects,
    availableAblityStones: abilityStoneSet,
    availableRings: ringSet,
    availableNecklaces: necklanceSet,
    availableEarrings: earringSet,
    availableEngravings: engravingSet,
    ignoreAbilityStone,
    ignoreRing,
    ignoreNecklace,
    ignoreEarring,
    ignoreEngraving,
  });
  console.log(result);

  self.postMessage(result);
};
