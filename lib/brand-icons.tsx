import { FaAws, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiDocker,
  SiJenkins,
  SiLinux,
  SiNginx,
  SiGithub,
  SiPm2,
  SiJirasoftware,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const brandIcons: Record<string, IconType> = {
  aws: FaAws,
  docker: SiDocker,
  jenkins: SiJenkins,
  linux: SiLinux,
  nginx: SiNginx,
  github: SiGithub,
  pm2: SiPm2,
  jira: SiJirasoftware,
};

// lucide-react v1 dropped brand/wordmark icons (Github, Linkedin, etc).
// Use these for nav/contact/footer icon usage instead.
export const GithubIcon = FaGithub;
export const LinkedinIcon = FaLinkedin;
