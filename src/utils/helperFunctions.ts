import { Types } from "../utils/enum";

export const defineTypes = (type: string) => {
  switch (type) {
    case Types.Grass:
      return "bg-green-500";
    case Types.Fire:
      return "bg-red-500";
    case Types.Water:
      return "bg-blue-500";
    case Types.Normal:
      return "bg-stone-400";
    case Types.Electric:
      return "bg-yellow-500";
    case Types.Ice:
      return "bg-sky-300";
    case Types.Fighting:
      return "bg-red-900";
    case Types.Poison:
      return "bg-purple-500";
    case Types.Ground:
      return "bg-amber-700";
    case Types.Flying:
      return "bg-slate-400";
    case Types.Psychic:
      return "bg-pink-600";
    case Types.Bug:
      return "bg-lime-400";
    case Types.Rock:
      return "bg-yellow-600";
    case Types.Ghost:
      return "bg-violet-800";
    case Types.Dark:
      return "bg-nuetral-800";
    case Types.Dragon:
      return "bg-purple-700";
    case Types.Steel:
      return "bg-stone-500";
    case Types.Fairy:
      return "bg-rose-400";
    default:
      return "bg-nuetral-800";
  }
};
