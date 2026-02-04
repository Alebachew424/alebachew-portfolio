import React from "react";
import alex from "../assets/alex.jfif";

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-80 sm:h-96 md:h-[28rem] bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-2xl overflow-hidden">
                {/* <img
                  src="../../dist/assets/alex.jfif"
                  alt="Alebachew Biset"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                /> */}
                {/* <div className="inline-block">
                  <img
                    src="../../dist/assets/alex.jfif"
                    alt="Alebachew Biset"
                    className="max-w-full h-auto"
                    loading="lazy"
                  />
                </div> */}

               <div className="w-full max-w-md mx-auto h-80 sm:h-96 md:h-[28rem] bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-2xl overflow-hidden">
  <img
    src={alex}
    alt="Alebachew Biset"
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500 rounded-full opacity-20"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded"></div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                I'm a passionate Full Stack Developer with over 3 years of
                experience creating digital solutions that matter. My journey
                began with a curiosity about how things work, which led me to
                discover the endless possibilities of code.
              </p>
              <p>
                I specialize in modern web technologies including React,
                Angular, ASP DOT NET, and cloud platforms. My approach combines
                technical expertise with creative problem-solving to deliver
                exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge
                through technical writing and mentoring.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  25+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  3+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Years
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  5+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Clients
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/assets/Alebachew_Biset_CV.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
                aria-label="Download CV"
              >
                <i className="fas fa-download"></i>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
