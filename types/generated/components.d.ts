import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsText extends Schema.Component {
  collectionName: 'components_components_texts';
  info: {
    displayName: 'text';
    description: '';
  };
  attributes: {
    itemText: Attribute.String;
  };
}

export interface ComponentsServiceCard extends Schema.Component {
  collectionName: 'components_components_service_cards';
  info: {
    displayName: 'serviceCard';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsProjectCard extends Schema.Component {
  collectionName: 'components_components_project_cards';
  info: {
    displayName: 'ProjectCard';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.String;
    text: Attribute.String;
    link: Attribute.Component<'components.link'>;
  };
}

export interface ComponentsProcessCard extends Schema.Component {
  collectionName: 'components_components_process_cards';
  info: {
    displayName: 'ProcessCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
  };
}

export interface ComponentsPriceCard extends Schema.Component {
  collectionName: 'components_components_price_cards';
  info: {
    displayName: 'priceCard';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    title: Attribute.String;
    subTitle: Attribute.Text;
    items: Attribute.Component<'components.text', true>;
    term: Attribute.String;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ElementsFaqItem extends Schema.Component {
  collectionName: 'components_elements_faq_items';
  info: {
    displayName: 'faqItem';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface ElementsAdditionalServiceCard extends Schema.Component {
  collectionName: 'components_elements_additional_service_cards';
  info: {
    displayName: 'additionalServiceCard';
  };
  attributes: {
    heading: Attribute.String;
    title: Attribute.String;
    numList: Attribute.Component<'components.text', true>;
    bulList: Attribute.Component<'components.text', true>;
  };
}

export interface LayoutWorksSection extends Schema.Component {
  collectionName: 'components_layout_works_sections';
  info: {
    displayName: 'WebsitesSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Media<'images', true>;
  };
}

export interface LayoutWorkingWithMe extends Schema.Component {
  collectionName: 'components_layout_working_with_mes';
  info: {
    displayName: 'WorkingWithMe';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    advantages: Attribute.Component<'components.text', true>;
    image: Attribute.Media<'images'>;
  };
}

export interface LayoutWorkSection extends Schema.Component {
  collectionName: 'components_layout_work_sections';
  info: {
    displayName: 'WorkSection';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    projectCards: Attribute.Component<'components.project-card', true>;
  };
}

export interface LayoutServicesSection extends Schema.Component {
  collectionName: 'components_layout_services_sections';
  info: {
    displayName: 'ServicesSection';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    title: Attribute.String;
    subTitle: Attribute.Text;
    serviceCard: Attribute.Component<'components.service-card', true>;
  };
}

export interface LayoutSelectedWorkSection extends Schema.Component {
  collectionName: 'components_layout_selected_work_sections';
  info: {
    displayName: 'SelectedWorkSection';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Component<'components.link'>;
    ProjectCard: Attribute.Component<'components.project-card', true>;
  };
}

export interface LayoutProcessSection extends Schema.Component {
  collectionName: 'components_layout_process_sections';
  info: {
    displayName: 'ProcessSection';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    title: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'components.link'>;
    processCards: Attribute.Component<'components.process-card', true>;
  };
}

export interface LayoutPriceBlock extends Schema.Component {
  collectionName: 'components_layout_price_blocks';
  info: {
    displayName: 'priceBlock';
  };
  attributes: {
    id_relation: Attribute.String;
    heading: Attribute.String;
    title: Attribute.String;
    subTitle: Attribute.Text;
    link: Attribute.Component<'components.link'>;
    priceCards: Attribute.Component<'components.price-card', true>;
    additionalServiceCard: Attribute.Component<'elements.additional-service-card'>;
  };
}

export interface LayoutNavMenu extends Schema.Component {
  collectionName: 'components_layout_nav_menus';
  info: {
    displayName: 'navMenu';
    description: '';
  };
  attributes: {
    navLink: Attribute.Component<'components.link', true>;
    dropDownLinks: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    subTitle: Attribute.Text;
    image: Attribute.Media<'images'>;
    CV_link: Attribute.Component<'components.link'>;
    myServicesLink: Attribute.Component<'components.link'>;
    title: Attribute.String;
  };
}

export interface LayoutGallerySection extends Schema.Component {
  collectionName: 'components_layout_gallery_sections';
  info: {
    displayName: 'gallerySection';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Media<'images', true>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    title: Attribute.String;
    link: Attribute.Component<'components.link'>;
  };
}

export interface LayoutFaq extends Schema.Component {
  collectionName: 'components_layout_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    heading: Attribute.String;
    title: Attribute.String;
    faqItems: Attribute.Component<'elements.faq-item', true>;
  };
}

export interface LayoutAboutMe extends Schema.Component {
  collectionName: 'components_layout_about_mes';
  info: {
    displayName: 'AboutMe';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    name: Attribute.String;
    heading: Attribute.String;
    title: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'components.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.text': ComponentsText;
      'components.service-card': ComponentsServiceCard;
      'components.project-card': ComponentsProjectCard;
      'components.process-card': ComponentsProcessCard;
      'components.price-card': ComponentsPriceCard;
      'components.link': ComponentsLink;
      'elements.faq-item': ElementsFaqItem;
      'elements.additional-service-card': ElementsAdditionalServiceCard;
      'layout.works-section': LayoutWorksSection;
      'layout.working-with-me': LayoutWorkingWithMe;
      'layout.work-section': LayoutWorkSection;
      'layout.services-section': LayoutServicesSection;
      'layout.selected-work-section': LayoutSelectedWorkSection;
      'layout.process-section': LayoutProcessSection;
      'layout.price-block': LayoutPriceBlock;
      'layout.nav-menu': LayoutNavMenu;
      'layout.hero-section': LayoutHeroSection;
      'layout.gallery-section': LayoutGallerySection;
      'layout.footer': LayoutFooter;
      'layout.faq': LayoutFaq;
      'layout.about-me': LayoutAboutMe;
    }
  }
}
