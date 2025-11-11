import { useMemo, type PropsWithChildren } from "react";
import { useHvAppShellCombinedProviders } from "@hitachivantara/app-shell-shared";

interface CombinedProvidersProps extends PropsWithChildren {}

const CombinedProviders = ({
  children: mainChildren,
}: CombinedProvidersProps) => {
  const { providers } = useHvAppShellCombinedProviders();

  const combined = useMemo(
    () =>
      providers?.reduceRight(
        (Acc, { component: Curr, config, key }) => (
          <Curr key={key} {...config}>
            {Acc}
          </Curr>
        ),
        mainChildren,
      ),
    [providers, mainChildren],
  );

  return <>{combined}</>;
};

export default CombinedProviders;
