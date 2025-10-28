export default function Company() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Our Company</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            To empower businesses worldwide with cutting-edge AI technology that
            drives innovation, efficiency, and growth. We believe in making AI
            accessible and practical for organizations of all sizes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            To be the global leader in AI solutions, recognized for our
            innovation, reliability, and commitment to customer success.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Company Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing the boundaries of what's possible with AI
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Delivering the highest quality solutions and services
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Operating with transparency and ethical principles
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Putting our customers' needs at the center of everything we do
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working together to achieve extraordinary results
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Building solutions that benefit both business and society
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a diverse team of AI researchers, engineers, and business
            professionals passionate about solving real-world problems with
            artificial intelligence. Our team brings together decades of
            experience from leading tech companies and research institutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-gray-600 text-sm">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-gray-600 text-sm">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold">Mike Johnson</h3>
              <p className="text-gray-600 text-sm">Head of AI Research</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Company History</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="font-semibold text-blue-600 min-w-[100px]">2023</div>
              <div className="text-gray-600">
                Auric AI founded with a vision to democratize AI technology
              </div>
            </div>
            <div className="flex gap-4">
              <div className="font-semibold text-blue-600 min-w-[100px]">2024</div>
              <div className="text-gray-600">
                Launched our flagship AI platform and secured Series A funding
              </div>
            </div>
            <div className="flex gap-4">
              <div className="font-semibold text-blue-600 min-w-[100px]">2025</div>
              <div className="text-gray-600">
                Expanded to international markets and reached 1000+ customers
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
