'use client';

import { FooterStyles } from './styles';
import Image from 'next/image';
import tagLogoOrange from '@/presentation/assets/tag-logo-orange.png';
import { usePathname } from 'next/navigation';

export const Footer: React.FC<{ noFooterPaths: string[] }> = ({
  noFooterPaths,
}) => {
  const pathname = usePathname();

  return (
    <>
      {noFooterPaths.includes(pathname) ? null : (
        <FooterStyles.Container>
          <FooterStyles.Content>
            <span>
              {' '}
              <Image src={tagLogoOrange} alt="Take a guide logo" width={96} /> ©
              2024 Take-a-Guide, Inc.
            </span>
          </FooterStyles.Content>
        </FooterStyles.Container>
      )}
    </>
  );
};
