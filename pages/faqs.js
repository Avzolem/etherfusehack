import MainLayout from "@/components/layouts/MainLayout";
import faqs from "@/data/faqs.json";

const FaqsPage = () => {
  return (
    <MainLayout fixed={true} title="Preguntas Frecuentes">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-happy-yellow bg-black  sm:tracking-tight lg:text-4xl py-2">
              Preguntas Frecuentes
            </p>
          </div>
          <div className="mt-24">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Tengo más dudas 😔
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Ponte en contacto con nosotros vía Whatsapp al número{" "}
                  <a
                    className="text-happy-yellow bg-black"
                    href="https://api.whatsapp.com/send?phone=526141652024"
                  >
                    +52 614 165 20 24
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FaqsPage;
