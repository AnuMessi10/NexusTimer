import { Cube } from "@/interfaces/Cube";

export default function getTotalRatingPoints(cubes: Cube[] | null) {
  if (!cubes) {
    return {
      totalNumeric: 0,
      totalFormatted: 0,
    };
  }

  let totalRating = 0;
  for (const cube of cubes) {
    cube.solves.all.forEach((cube) => {
      totalRating += cube.rating;
    });
    cube.solves.session.forEach((cube) => {
      totalRating += cube.rating;
    });
  }

  return {
    totalNumeric: totalRating,
    totalFormatted: totalRating.toLocaleString(),
  };
}
