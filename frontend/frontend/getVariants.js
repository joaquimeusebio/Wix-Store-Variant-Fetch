import { getAllProductVariants } from 'backend/products.jsw';

$w.onReady(function () {
    // Step 7: Call the backend function to get all filtered product variants.
    getAllProductVariants()
        .then((filteredVariants) => {
            // Step 8: Handle the returned filtered variants.
            filteredVariants.forEach(variant => {
                console.log(`Product: ${variant.productName}`);
                console.log(`Variant: ${variant.variantName}`);
                console.log(`Price: ${variant.price}`);
                console.log(`Formatted Price: ${variant.formattedPrice}`);
            });
        })
        .catch((error) => {
            console.error('Error fetching product variants:', error);
        });
});
