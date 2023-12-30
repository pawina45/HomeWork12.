import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  let lastCategory = null;

  const rows = products.map((product) => {
    const categoryRow = (product.category !== lastCategory) ? (
      <ProductCategoryRow
        category={product.category}
        key={product.category}
      />
    ) : null;

    lastCategory = product.category;

    return (
      <React.Fragment key={product.name}>
        {categoryRow}
        <ProductRow product={product} key={product.name} />
      </React.Fragment>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
