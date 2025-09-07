export type ComponentVariant = '1' | '2';

export interface VariantState {
  header: ComponentVariant;
  navbar: ComponentVariant;
  hero: ComponentVariant;
  content: ComponentVariant;
  dockbar: ComponentVariant;
}

export interface VariantConfig {
  name: string;
  description: string;
  preview?: string;
}

export interface ComponentVariants {
  [key: string]: {
    [variant: string]: VariantConfig;
  };
}

export const DEFAULT_VARIANTS: VariantState = {
  header: '1',
  navbar: '1', 
  hero: '1',
  content: '1',
  dockbar: '1'
};

export const COMPONENT_VARIANTS: ComponentVariants = {
  header: {
    '1': {
      name: 'Glass Header',
      description: 'Current glass morphism header with layout toggle'
    },
    '2': {
      name: 'Minimal Header', 
      description: 'Clean minimal header with simple navigation'
    }
  },
  navbar: {
    '1': {
      name: 'Glass Navbar',
      description: 'Current glass morphism navigation bar'
    },
    '2': {
      name: 'Sidebar Navbar',
      description: 'Side navigation with expanded menu'
    }
  },
  hero: {
    '1': {
      name: 'Glass Hero',
      description: 'Current hero section with glass effects'
    },
    '2': {
      name: 'Minimal Hero',
      description: 'Clean hero section with typography focus'
    }
  },
  content: {
    '1': {
      name: 'Glass Content',
      description: 'Current content with glass morphism layouts'
    },
    '2': {
      name: 'Grid Content',
      description: 'Traditional grid-based content layout'
    }
  },
  dockbar: {
    '1': {
      name: 'Glass Dockbar',
      description: 'Current glass morphism bottom dock'
    },
    '2': {
      name: 'Fixed Dockbar',
      description: 'Traditional fixed bottom navigation'
    }
  }
};