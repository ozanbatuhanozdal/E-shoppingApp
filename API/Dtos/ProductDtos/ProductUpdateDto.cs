namespace API.Dtos.ProductDtos
{
    public class ProductUpdateDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }

        public double ProductPrice { get; set; }

        public string ProductImageUrl { get; set; }

        public string ProductExplanation { get; set; }

        public int CategoryId { get; set; }
    }
}