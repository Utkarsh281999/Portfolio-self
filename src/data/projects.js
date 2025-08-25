import HostingImg from '../img/intern.png';
import SkinlesionImg from '../img/photo.jpg';

export const projectList = [
  {
    title: "AWS Cloud Hosting Project",
    image: HostingImg,
    description:
      "Comprehensive cloud hosting solution using AWS. Features auto-scaling, load balancing, DNS management, and database integration.",
    stack: "AWS (S3, EC2, Route53, RDS, IAM, Auto Scaling)",
    features: ["Auto-scaling", "DNS Management", "Database Integration"],
    link: "https://example.com/aws-hosting",
    type: ["Web App"],
    published: false
  },
  {
    title: "Skin Lesion Detection using CNN",
    image: SkinlesionImg,
    description:
      "ML project for cancer diagnosis using CNNs. Published research for early detection of skin lesions.",
    stack: "Python, TensorFlow, CNN, Image Processing",
    features: ["Early Detection", "CNN Model", "Research Publication"],
    type: ["Research Project", "Publication", "Bachelor's Thesis"],
    published: true
  }
];
