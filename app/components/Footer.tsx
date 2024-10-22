export default function Footer() {
  return (
    <footer className="zuleika-text-color mt-10 font-termina py-8 px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-sm mb-2">Customer Care</h3>
          <ul className="text-xs space-y-0.5">
            <li>
              <a href="#">Size Guide</a>
            </li>
            <li>
              <a href="#">Jewellery Care</a>
            </li>
            <li>
              <a href="#">Made to Measure</a>
            </li>
          </ul>
        </div>
        <div className="mb-4 sm:mb-0">
          <h3 className="mb-2 text-sm">Orders</h3>
          <ul className="text-xs space-y-0.5">
            <li>
              <a href="#">Account Log-in</a>
            </li>
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Gifting</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns / Exchanges</a>
            </li>
            <li>
              <a href="#">Track</a>
            </li>
          </ul>
        </div>
        <div className="mb-4 sm:mb-0">
          <h3 className="mb-2 text-sm">Legal</h3>
          <ul className="text-xs space-y-0.5">
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy and Cookies</a>
            </li>
            <li>
              <a href="#">Terms of Sale</a>
            </li>
          </ul>
        </div>
        <div className="mb-4 sm:mb-0">
          <h3 className="mb-2 text-sm">Contact</h3>
          <ul className="text-xs space-y-0.5">
            <li>
              <a href="#">Call</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm mb-2">Follow</h3>
          <ul className="text-xs space-y-0.5">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Subscribe</a>
            </li>
          </ul>
          <p className="max-w-xs text-xs">
            Sign up to receive news about ZULEIKA'S collections, events and
            sales.
          </p>
          <p className="mt-4 max-w-xs text-xs">Email*</p>
        </div>
      </div>
    </footer>
  )
}
