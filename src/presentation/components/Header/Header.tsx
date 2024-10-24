'use client';

import { HeaderStyles } from './styles';
import { items } from './utils/items';
import { Button } from '@/presentation/components/Button/Button';
import tagLogoOrange from '@/presentation/assets/tag-logo-orange.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Hambuger } from '@/presentation/assets/Hamburger';
import { UserDropdown } from './UserDropdown/UserDropdown';
import { useEffect, useRef } from 'react';
import { useUserDataState } from '@/core/recoil/states/user';

export const Header: React.FC<{ noHeaderPaths: string[] }> = ({
  noHeaderPaths,
}) => {
  const pathname = usePathname();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { userData } = useUserDataState();
  const userDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {noHeaderPaths.includes(pathname) ? null : (
        <HeaderStyles.Container>
          <HeaderStyles.Content>
            <Link href="/">
              <HeaderStyles.TagLogo src={tagLogoOrange} alt="Tag logo" />
            </Link>

            <HeaderStyles.ItemsContainer $isHamburgerOpen={isHamburgerOpen}>
              {items.map(({ label, target, url }) => (
                <HeaderStyles.Item key={label} href={url} target={target}>
                  {label}
                </HeaderStyles.Item>
              ))}

              {userData.isLogged ? (
                <UserDropdown
                  $userName={userData.name}
                  $isOpen={isUserDropdownOpen}
                  $ref={userDropdownRef}
                  onClick={() => {
                    setIsUserDropdownOpen(!isUserDropdownOpen);
                  }}
                />
              ) : (
                <HeaderStyles.ButtonsContainer>
                  <Link href="/login">
                    <Button.Primary $width="9rem" $fontSize="1rem">
                      Login
                    </Button.Primary>
                  </Link>
                  <Link href="/sign-up">
                    <Button.Secondary $width="9rem" $fontSize="1rem">
                      Criar Conta
                    </Button.Secondary>
                  </Link>
                </HeaderStyles.ButtonsContainer>
              )}
            </HeaderStyles.ItemsContainer>

            <HeaderStyles.HamburgerContainer
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            >
              <Hambuger />
            </HeaderStyles.HamburgerContainer>
          </HeaderStyles.Content>
        </HeaderStyles.Container>
      )}
    </>
  );
};
