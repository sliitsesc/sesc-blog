import Container from "../_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Github,
  Facebook,
  Linkedin,
  Instagram,
  Globe,
} from "lucide-react";

export default function About() {
  return (
    <Container>
      <article className="mb-32">
        <div className="flex flex-col items-center mb-16 mt-12">
          <div className="w-full max-w-2xl mb-8">
            <Image
              src="/assets/sesc-logo-svg.svg"
              alt="SLIIT SESC Logo"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="w-full max-w-2xl">
            <p className="text-lg leading-relaxed mb-4">
              SLIIT SESC (Software Engineering Students' Community) is a dynamic
              organization at the Sri Lanka Institute of Information Technology.
              We foster collaboration, knowledge sharing, and skill development
              among software engineering students, preparing them for the
              challenges of the tech industry.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our blog showcases insights, experiences, and the latest trends in
              software engineering, reflecting the vibrant spirit of our
              community.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-accent-1 p-6 rounded-lg shadow-md w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-dark-blue text-center">
              Our Mission
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg">
                Maintain a healthy interpersonal relationship among the software
                engineering undergraduates and the academic staff.
              </li>
              <li className="text-lg">
                Promote academic related and non-academic events/activities for
                the wellbeing of student community.
              </li>
            </ul>
          </div>

          <div className="bg-accent-1 p-6 rounded-lg shadow-md w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-dark-blue text-center">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-dark-blue" />
                <a
                  href="mailto:sesc@sliit.lk"
                  className="text-dark-blue hover:underline"
                >
                  sesc@sliit.lk
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-dark-blue" />
                <span>SLIIT, New Kandy Road, Malabe, Sri Lanka</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-dark-blue" />
                <a
                  href="https://www.sliit.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-blue hover:underline"
                >
                  www.sliit.lk
                </a>
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="https://github.com/sliit-sesc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-accent-7"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://web.facebook.com/sliitsecommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-accent-7"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/sliit.sesc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-accent-7"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/sesc-sliit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-accent-7"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}
