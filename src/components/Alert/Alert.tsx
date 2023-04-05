import './alert.css'

import {
  AiFillCheckCircle as SuccessIcon,
  AiFillCloseCircle as ErrorIcon,
  AiFillInfoCircle as InfoIcon,
  AiFillWarning as WarningIcon,
  AiOutlineClose as CloseIcon,
} from 'react-icons/ai'

/**
 * Alert 컴포넌트의 props입니다.
 */
export interface AlertProps {
  /**
   * Alert의 작업입니다.
   */
  action?: React.ReactNode
  /**
   * 닫기 애니메이션이 끝날 때 호출됩니다.
   */
  afterClose?: () => void
  /**
   * 배너로 표시할지 여부입니다.
   */
  banner?: boolean
  /**
   * Alert를 닫을 수 있는지 여부입니다.
   */
  closable?: boolean
  /**
   * 보여줄 닫기 텍스트입니다.
   */
  closeText?: React.ReactNode
  /**
   * 사용자 정의 닫기 아이콘입니다.
   */
  closeIcon?: React.ReactNode
  /**
   * Alert의 추가 콘텐츠입니다.
   */
  description?: React.ReactNode
  /**
   * 사용자 정의 아이콘입니다. showIcon이 true인 경우에만 적용됩니다.
   */
  icon?: React.ReactNode
  /**
   * Alert의 콘텐츠입니다.
   */
  message?: React.ReactNode
  /**
   * 아이콘을 표시할지 여부입니다.
   * 배너 모드에서는 기본값이 true이며, 그 외에는 기본값이 false입니다.
   */
  showIcon?: boolean
  /**
   * Alert 스타일의 타입입니다.
   * 옵션: success, info, warning, error입니다.
   * 배너 모드에서는 기본값이 warning이며, 그 외에는 기본값이 info입니다.
   */
  type?: 'success' | 'info' | 'warning' | 'error'
  /**
   * Alert가 닫힐 때 호출되는 콜백 함수입니다.
   */
  onClose?: (e: React.MouseEvent) => void
  /**
   * Alert의 크기입니다.
   * 옵션: small, large입니다.
   * 배너 모드에서는 기본값이 large이며, 그 외에는 기본값이 small입니다.
   */
  size?: 'small' | 'large'
}

const ALERT_TYPE = {
  success: { style: 'alert-success', icon: SuccessIcon },
  warning: { style: 'alert-warning', icon: WarningIcon },
  error: { style: 'alert-error', icon: ErrorIcon },
  info: { style: 'alert-info', icon: InfoIcon },
} as const

/**
 * 피드백에 대한 알림 컴포넌트입니다.
 *
 * ## 언제 사용하나요?
 * - 사용자에게 경고 메시지를 표시해야 하는 경우.
 * - 사용자가 직접 닫을 수 있는 컴포넌트가 필요한 경우.
 *
 * ```js
 * import { Alert } from "grida";
 * ```
 */
export default function Alert({
  message,
  type = 'info',
  showIcon = false,
  icon,
  description,
  closable,
  closeIcon,
  closeText,
  banner = false,
  action,
  onClose,
  afterClose,
  size = 'small',
}: AlertProps) {
  const alertType = ALERT_TYPE[type]

  const handleClick = (e: React.MouseEvent) => {
    onClose?.(e)
    afterClose?.()
  }

  return (
    <div
      className={`alert ${alertType.style} ${banner ? 'alert-banner' : 'alert-default'} ${
        size === 'large' ? 'alert-large' : 'alert-small'
      }`}
    >
      <header className="alert-header">
        <section className="title">
          {showIcon && (icon || <alertType.icon className="icon" />)}
          <span>{message}</span>
        </section>
        <section className="extra">
          {action && <nav>{action}</nav>}
          {closable && (
            <button className="cursor-pointer" onClick={handleClick}>
              {closeIcon || closeText || <CloseIcon />}
            </button>
          )}
        </section>
      </header>
      {description && <section className="alert-description">{description}</section>}
    </div>
  )
}
