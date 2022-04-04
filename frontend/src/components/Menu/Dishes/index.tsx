import { useEffect } from "react";
import { useState } from "react";
import { Dish } from "types";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function sortDishes(dishes: Dish[], sort: string, k = 1) {
  const tmp = [...dishes];
  tmp.sort((a, b) => {
    if (a[sort as keyof Dish] > b[sort as keyof Dish]) {
      return 1 * k;
    }
    if (a[sort as keyof Dish] < b[sort as keyof Dish]) {
      return -1 * k;
    }
    return 0;
  });
  return tmp;
}

const Dishes = ({ dishes }: { dishes: Dish[] }) => {
  const [sort, setSort] = useState("name");
  const [sortedDishes, setSortedDishes] = useState(sortDishes(dishes, sort));

  useEffect(() => {
    setSortedDishes(sortDishes(dishes, sort, sort === "name" ? 1 : -1));
  }, [sort, dishes]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Jelo
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Energija
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Ugljikohidrati
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Proteini
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Masti
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedDishes.map((dish: Dish, dishIdx: number) => (
              <tr key={dishIdx}>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-4 pl-4 sm:pl-6 pr-3 text-sm"
                  )}
                >
                  <div className="font-medium text-gray-900">{dish.name}</div>
                  <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                    <div>mem / cpu</div>
                    <div>storage</div>
                  </div>
                  {dishIdx !== 0 ? (
                    <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" />
                  ) : null}
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                  )}
                >
                  {dish.energy} kcal
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                  )}
                >
                  {dish.carbohydrates} g
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                  )}
                >
                  {dish.proteins} g
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-gray-200",
                    "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                  )}
                >
                  {dish.fat} g
                </td>
                <td
                  className={classNames(
                    dishIdx === 0 ? "" : "border-t border-transparent",
                    "relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium"
                  )}
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Select<span className="sr-only">, {dish.name}</span>
                  </button>
                  {dishIdx !== 0 ? (
                    <div className="absolute right-6 left-0 -top-px h-px bg-gray-200" />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <select defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="name">Jelo A-Z</option>
          <option value="proteins">Proteini više prema manje</option>
          <option value="energy">Kalorije više prema manje</option>
        </select>
      </div>
    </div>
  );
};

export default Dishes;
