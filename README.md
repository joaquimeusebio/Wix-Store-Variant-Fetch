# Wix-Store-Variant-Fetch

# Wix Product Variant Price Fetcher

Since we cannot have a direct acess to all variant prices with the common query, I develop this simple project helps you retrieve and display product variants and their respective prices,  for your products in Wix Store. It filters products based on a specific category and the desired attributes.

## Features

- Queries all products within a specific category.
- Filters product variants based on specific attributes.
- Retrieves and displays variant prices and other relevant data.

## How to Set Up

### 1. Backend Setup (`products.jsw`)

- Navigate to the Wix Editor's **Backend** section.
- Create a new file called `products.jsw` and copy the code from `backend/products.jsw`.
- Replace `"your-category-id"` with the actual category ID of the products you want to query. You can check your category id by going to wix store product category , and copying the last part of your URL ( Ex: /store/categories/list/category/{category id})

### 2. Frontend Setup (`getVariants.js`)

- Create a new page in your Wix Editor where you want to display or log the product variant information.
- In the page’s **Page Code** section, create a new file called `getVariants.js`.
- Copy and paste the code from `frontend/getVariants.js`.

### 3. Customization

- Modify the `desiredVariants` array in the `products.jsw` file to filter the variants by the attributes you need. For example, you can filter by size, color, weight, or any other product options available in your store.
- Adjust how you handle the output in the frontend (e.g., display it in the console, or create a custom UI).

## Running the Code

Once everything is set up:
1. Open the relevant page in Wix Editor.
2. Open the **Developer Tools** (in your browser: `F12` or `Cmd+Opt+I` on macOS).
3. Load the page to see the filtered variant details (product name, variant name, price) logged in the console.

## Example

The frontend console should display something like this:

Product: "PRODUCT-NAME"  Variant: "VARIANT-NAME"  | "VARIANT-OPTION" Price: "VARIANT-PRICE"  Formatted Price:"$VARIANT-PRICE"


