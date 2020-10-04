import { allConditions, queryTypes } from "./constants";
export const finalResult = ({ table, where, type, order, group, count }) => {
	return ` 
  <?php
  // Larvel model
  namespace App\\Models;
  
  
  use Illuminate\\Database\\Eloquent\\Model;
  
  class ${table} extends Model
  {
      /**
       * The model's default values for attributes.
       *
       * @var array
       */
      protected $attributes = [
          'delayed' => false,
      ];
  }
   // ORM 
   ${table}::${where}
   ${order ? `${order}` : ""}
   ->${type}();
  `;
};
export const breakQuery = (query) => {
	if (typeof query === "string" || query instanceof String) {
		const queryArray = removeSpaces(query.replace(/(\r\n|\n|\r)/gm, ""));
		let table,
			where,
			order = "";

		if (queryArray.length > 0) {
			const type = queryTypes[queryArray[0]];
			switch (queryArray[0]) {
				case "select":
					const { model, condition, orders } = selectFun(queryArray);
					table = model;
					where = condition;
					order = orders;
					break;
				case "update":
					break;
				case "delete":
					break;
				case "insert":
					break;
				default:
					break;
			}
			return finalResult({ table, where, type, order });
		}
		return false;
	}
};

export const removeSpaces = (query) => {
	// eslint-disable-next-line array-callback-return
	return query.split(" ").filter((value) => {
		if (value) {
			return value.toLowerCase();
		}
	});
};

export const toUpperCase = (string) => {
	if (string.slice(-1) === "s") {
		string = string.slice(0, -1);
	}
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const makeWhereCondition = (queryArray) => {
	const whereIndex = queryArray.indexOf("where");
	if (whereIndex !== -1) {
		const allWhere = queryArray.slice(whereIndex + 1);
		let where = "";

		getAllConditions(allWhere).forEach((value, key) => {
			where += `${key === 0 ? "" : "->"}${value[0]}${value[1]}`;
		});
		return where;
	}
};

export const chunkArray = (array, chunkSize) => {
	return [].concat.apply(
		[],
		array.map(function (_elem, i) {
			return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
		})
	);
};
export const getAllConditions = (array) => {
	const where = [];
	array.forEach((value, key) => {
		if (key === 0) {
			where.push([
				[allConditions.and],
				[`('${array[key]}', '${array[key + 1]}', ${array[key + 2]})`],
			]);
		}
		if (Object.prototype.hasOwnProperty.call(allConditions, value)) {
			where.push([
				[allConditions[value]],
				[`('${array[key + 1]}', '${array[key + 2]}', ${array[key + 3]})`],
			]);
		}
	});
	return where;
};

export const makeOrders = (order) => {
	if (Array.isArray(order)) {
		let final = "";
		const total = order.length;
		for (let i = 0; total > i; i += 2) {
			final += `->orderBy('${order[i].replace(",", "")}', '${order[
				i + 1
			].replace(",", "")}')`;
		}
		return final;
	}
	return false;
};

export const makeOrderCorrect = (order) => {
	order = order.split(" ,");
	console.log(order);
	return order;
};

export const selectFun = (queryArray) => {
	const model = toUpperCase(queryArray[queryArray.indexOf("from") + 1]);
	const condition = makeWhereCondition(queryArray);
	const orders = makeOrders(queryArray.slice(queryArray.indexOf("order") + 2));
	return { model, condition, orders };
};
