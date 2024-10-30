"use client"

import {
  extendVariants,
  Input as NextUIInput,
  Textarea as NextUITextarea,
  Button as NextUIButton,
  ButtonGroup as NextUIButtonGroup,
  Card as NextUICard,
  CardHeader as NextUICardHeader,
  CardBody as NextUICardBody,
  CardFooter as NextUICardFooter,
  Autocomplete as NextUIAutocomplete,
  AutocompleteItem as NextUIAutocompleteItem,
  AutocompleteSection as NextUIAutocompleteSection,
  Popover as NextUIPopover,
  PopoverTrigger as NextUIPopoverTrigger,
  PopoverContent as NextUIPopoverContent,
  Spacer as NextUISpacer,
  Divider as NextUIDivider,
  Image as NextUIImage,
  ScrollShadow as NextUIScrollShadow,
  Select as NextUISelect,
  SelectItem as NextUISelectItem,
  SelectSection as NextUISelectSection,
  Checkbox as NextUICheckbox,
  CheckboxGroup as NextUICheckboxGroup,
  Radio as NextUIRadio,
  RadioGroup as NextUIRadioGroup,
  Switch as NextUISwitch,
  Slider as NextUISlider,
  Modal as NextUIModal,
  ModalContent as NextUIModalContent,
  ModalHeader as NextUIModalHeader,
  ModalBody as NextUIModalBody,
  ModalFooter as NextUIModalFooter,
  Tooltip as NextUITooltip,
  Dropdown as NextUIDropdown,
  DropdownTrigger as NextUIDropdownTrigger,
  DropdownMenu as NextUIDropdownMenu,
  DropdownItem as NextUIDropdownItem,
  DropdownSection as NextUIDropdownSection,
  Navbar as NextUINavbar,
  NavbarBrand as NextUINavbarBrand,
  NavbarContent as NextUINavbarContent,
  NavbarItem as NextUINavbarItem,
  NavbarMenuToggle as NextUINavbarMenuToggle,
  NavbarMenu as NextUINavbarMenu,
  NavbarMenuItem as NextUINavbarMenuItem,
  Breadcrumbs as NextUIBreadcrumbs,
  BreadcrumbItem as NextUIBreadcrumbItem,
  Link as NextUILink,
  Tabs as NextUITabs,
  Tab as NextUITab,
  Progress as NextUIProgress,
  CircularProgress as NextUICircularProgress,
  Spinner as NextUISpinner,
  Skeleton as NextUISkeleton,
  Badge as NextUIBadge,
  Chip as NextUIChip,
  Snippet as NextUISnippet,
  DateInput as NextUIDateInput,
  TimeInput as NextUITimeInput,
  DatePicker as NextUIDatePicker,
  DateRangePicker as NextUIDateRangePicker,
  Calendar as NextUICalendar,
  Table as NextUITable,
  TableHeader as NextUITableHeader,
  TableBody as NextUITableBody,
  TableColumn as NextUITableColumn,
  TableRow as NextUITableRow,
  TableCell as NextUITableCell,
  Pagination as NextUIPagination,
  PaginationItem as NextUIPaginationItem,
  PaginationCursor as NextUIPaginationCursor,
  User as NextUIUser,
  Avatar as NextUIAvatar,
  AvatarGroup as NextUIAvatarGroup,
  AvatarIcon as NextUIAvatarIcon,
} from "@nextui-org/react"

/* --------------------------------- INPUT --------------------------------- */
export type IInput = typeof NextUIInput
export const Input = extendVariants(NextUIInput, {}) as IInput

/* -------------------------------- TEXTAREA ------------------------------- */
export type ITextarea = typeof NextUITextarea
export const Textarea = extendVariants(NextUITextarea, {}) as ITextarea

/* --------------------------------- BUTTON -------------------------------- */
export type IButton = typeof NextUIButton
export const Button = extendVariants(NextUIButton, {}) as IButton

export type IButtonGroup = typeof NextUIButtonGroup
export const ButtonGroup = extendVariants(NextUIButtonGroup, {}) as IButtonGroup

/* ---------------------------------- CARD --------------------------------- */
export type ICard = typeof NextUICard
export const Card = extendVariants(NextUICard, {}) as ICard

export type ICardHeader = typeof NextUICardHeader
export const CardHeader = extendVariants(NextUICardHeader, {}) as ICardHeader

export type ICardBody = typeof NextUICardBody
export const CardBody = extendVariants(NextUICardBody, {}) as ICardBody

export type ICardFooter = typeof NextUICardFooter
export const CardFooter = extendVariants(NextUICardFooter, {}) as ICardFooter

/* ------------------------------ AUTOCOMPLETE ----------------------------- */
export type IAutocomplete = typeof NextUIAutocomplete
export const Autocomplete = extendVariants(NextUIAutocomplete, {}) as IAutocomplete

export type IAutocompleteItem = typeof NextUIAutocompleteItem
export const AutocompleteItem = extendVariants(NextUIAutocompleteItem, {}) as IAutocompleteItem

export type IAutocompleteSection = typeof NextUIAutocompleteSection
export const AutocompleteSection = extendVariants(
  NextUIAutocompleteSection,
  {}
) as IAutocompleteSection

/* -------------------------------- POPOVER ------------------------------- */
export type IPopover = typeof NextUIPopover
export const Popover = extendVariants(NextUIPopover, {}) as unknown as IPopover

export type IPopoverTrigger = typeof NextUIPopoverTrigger
export const PopoverTrigger = extendVariants(NextUIPopoverTrigger, {}) as IPopoverTrigger

export type IPopoverContent = typeof NextUIPopoverContent
export const PopoverContent = extendVariants(NextUIPopoverContent, {}) as unknown as IPopoverContent

/* -------------------------------- SPACER -------------------------------- */
export type ISpacer = typeof NextUISpacer
export const Spacer = extendVariants(NextUISpacer, {}) as ISpacer

/* -------------------------------- DIVIDER ------------------------------- */
export type IDivider = typeof NextUIDivider
export const Divider = extendVariants(NextUIDivider, {}) as IDivider

/* --------------------------------- IMAGE -------------------------------- */
export type IImage = typeof NextUIImage
export const Image = extendVariants(NextUIImage, {}) as IImage

/* ----------------------------- SCROLLSHADOW ----------------------------- */
export type IScrollShadow = typeof NextUIScrollShadow
export const ScrollShadow = extendVariants(NextUIScrollShadow, {}) as IScrollShadow

/* -------------------------------- SELECT -------------------------------- */
export type ISelect = typeof NextUISelect
export const Select = extendVariants(NextUISelect, {}) as ISelect

export type ISelectItem = typeof NextUISelectItem
export const SelectItem = extendVariants(NextUISelectItem, {}) as ISelectItem

export type ISelectSection = typeof NextUISelectSection
export const SelectSection = extendVariants(NextUISelectSection, {}) as ISelectSection

/* ------------------------------- CHECKBOX ------------------------------- */
export type ICheckbox = typeof NextUICheckbox
export const Checkbox = extendVariants(NextUICheckbox, {}) as ICheckbox

export type ICheckboxGroup = typeof NextUICheckboxGroup
export const CheckboxGroup = extendVariants(NextUICheckboxGroup, {}) as ICheckboxGroup

/* -------------------------------- RADIO -------------------------------- */
export type IRadio = typeof NextUIRadio
export const Radio = extendVariants(NextUIRadio, {}) as unknown as IRadio

export type IRadioGroup = typeof NextUIRadioGroup
export const RadioGroup = extendVariants(NextUIRadioGroup, {}) as IRadioGroup

/* -------------------------------- SWITCH -------------------------------- */
export type ISwitch = typeof NextUISwitch
export const Switch = extendVariants(NextUISwitch, {}) as ISwitch

/* -------------------------------- SLIDER -------------------------------- */
export type ISlider = typeof NextUISlider
export const Slider = extendVariants(NextUISlider, {}) as ISlider

/* -------------------------------- MODAL -------------------------------- */
export type IModal = typeof NextUIModal
export const Modal = extendVariants(NextUIModal, {}) as unknown as IModal

export type IModalContent = typeof NextUIModalContent
export const ModalContent = extendVariants(NextUIModalContent, {}) as unknown as IModalContent

export type IModalHeader = typeof NextUIModalHeader
export const ModalHeader = extendVariants(NextUIModalHeader, {}) as IModalHeader

export type IModalBody = typeof NextUIModalBody
export const ModalBody = extendVariants(NextUIModalBody, {}) as IModalBody

export type IModalFooter = typeof NextUIModalFooter
export const ModalFooter = extendVariants(NextUIModalFooter, {}) as IModalFooter

/* -------------------------------- TOOLTIP ------------------------------- */
export type ITooltip = typeof NextUITooltip
export const Tooltip = extendVariants(NextUITooltip, {}) as ITooltip

/* -------------------------------- DROPDOWN ------------------------------ */
export type IDropdown = typeof NextUIDropdown
export const Dropdown = extendVariants(NextUIDropdown, {}) as IDropdown

export type IDropdownTrigger = typeof NextUIDropdownTrigger
export const DropdownTrigger = extendVariants(NextUIDropdownTrigger, {}) as IDropdownTrigger

export type IDropdownMenu = typeof NextUIDropdownMenu
export const DropdownMenu = extendVariants(NextUIDropdownMenu, {}) as IDropdownMenu

export type IDropdownItem = typeof NextUIDropdownItem
export const DropdownItem = extendVariants(NextUIDropdownItem, {}) as IDropdownItem

export type IDropdownSection = typeof NextUIDropdownSection
export const DropdownSection = extendVariants(NextUIDropdownSection, {}) as IDropdownSection

/* -------------------------------- NAVBAR -------------------------------- */
export type INavbar = typeof NextUINavbar
export const Navbar = extendVariants(NextUINavbar, {}) as INavbar

export type INavbarBrand = typeof NextUINavbarBrand
export const NavbarBrand = extendVariants(NextUINavbarBrand, {}) as INavbarBrand

export type INavbarContent = typeof NextUINavbarContent
export const NavbarContent = extendVariants(NextUINavbarContent, {}) as INavbarContent

export type INavbarItem = typeof NextUINavbarItem
export const NavbarItem = extendVariants(NextUINavbarItem, {}) as INavbarItem

export type INavbarMenuToggle = typeof NextUINavbarMenuToggle
export const NavbarMenuToggle = extendVariants(NextUINavbarMenuToggle, {}) as INavbarMenuToggle

export type INavbarMenu = typeof NextUINavbarMenu
export const NavbarMenu = extendVariants(NextUINavbarMenu, {}) as INavbarMenu

export type INavbarMenuItem = typeof NextUINavbarMenuItem
export const NavbarMenuItem = extendVariants(NextUINavbarMenuItem, {}) as INavbarMenuItem

/* ------------------------------ BREADCRUMBS ----------------------------- */
export type IBreadcrumbs = typeof NextUIBreadcrumbs
export const Breadcrumbs = extendVariants(NextUIBreadcrumbs, {}) as IBreadcrumbs

export type IBreadcrumbItem = typeof NextUIBreadcrumbItem
export const BreadcrumbItem = extendVariants(NextUIBreadcrumbItem, {}) as unknown as IBreadcrumbItem

/* --------------------------------- LINK --------------------------------- */
export type ILink = typeof NextUILink
export const Link = extendVariants(NextUILink, {}) as ILink

/* --------------------------------- TABS --------------------------------- */
export type ITabs = typeof NextUITabs
export const Tabs = extendVariants(NextUITabs, {}) as ITabs

export type ITab = typeof NextUITab
export const Tab = extendVariants(NextUITab, {}) as ITab

/* -------------------------------- PROGRESS ------------------------------ */
export type IProgress = typeof NextUIProgress
export const Progress = extendVariants(NextUIProgress, {}) as IProgress

export type ICircularProgress = typeof NextUICircularProgress
export const CircularProgress = extendVariants(NextUICircularProgress, {}) as ICircularProgress

/* -------------------------------- SPINNER ------------------------------- */
export type ISpinner = typeof NextUISpinner
export const Spinner = extendVariants(NextUISpinner, {}) as ISpinner

/* -------------------------------- SKELETON ------------------------------ */
export type ISkeleton = typeof NextUISkeleton
export const Skeleton = extendVariants(NextUISkeleton, {}) as ISkeleton

/* --------------------------------- BADGE -------------------------------- */
export type IBadge = typeof NextUIBadge
export const Badge = extendVariants(NextUIBadge, {}) as unknown as IBadge

/* --------------------------------- CHIP --------------------------------- */
export type IChip = typeof NextUIChip
export const Chip = extendVariants(NextUIChip, {}) as IChip

/* -------------------------------- SNIPPET ------------------------------- */
export type ISnippet = typeof NextUISnippet
export const Snippet = extendVariants(NextUISnippet, {}) as ISnippet

/* ------------------------------- DATEINPUT ----------------------------- */
export type IDateInput = typeof NextUIDateInput
export const DateInput = extendVariants(NextUIDateInput, {}) as IDateInput

/* ------------------------------- TIMEINPUT ----------------------------- */
export type ITimeInput = typeof NextUITimeInput
export const TimeInput = extendVariants(NextUITimeInput, {}) as ITimeInput

/* ------------------------------- DATEPICKER ----------------------------- */
export type IDatePicker = typeof NextUIDatePicker
export const DatePicker = extendVariants(NextUIDatePicker, {}) as IDatePicker

/* ------------------------------- DATERANGEPICKER ----------------------------- */
export type IDateRangePicker = typeof NextUIDateRangePicker
export const DateRangePicker = extendVariants(NextUIDateRangePicker, {}) as IDateRangePicker

/* ------------------------------- CALENDAR ----------------------------- */
export type ICalendar = typeof NextUICalendar
export const Calendar = extendVariants(NextUICalendar, {}) as ICalendar

/* ------------------------------- TABLE ----------------------------- */
export type ITable = typeof NextUITable
export const Table = extendVariants(NextUITable, {}) as ITable

export type ITableHeader = typeof NextUITableHeader
export const TableHeader = extendVariants(NextUITableHeader, {}) as ITableHeader

export type ITableBody = typeof NextUITableBody
export const TableBody = extendVariants(NextUITableBody, {}) as ITableBody

export type ITableColumn = typeof NextUITableColumn
export const TableColumn = extendVariants(NextUITableColumn, {}) as ITableColumn

export type ITableRow = typeof NextUITableRow
export const TableRow = extendVariants(NextUITableRow, {}) as ITableRow

export type ITableCell = typeof NextUITableCell
export const TableCell = extendVariants(NextUITableCell, {}) as ITableCell

/* ------------------------------- PAGINATION ----------------------------- */
export type IPagination = typeof NextUIPagination
export const Pagination = extendVariants(NextUIPagination, {}) as unknown as IPagination

export type IPaginationItem = typeof NextUIPaginationItem
export const PaginationItem = extendVariants(NextUIPaginationItem, {}) as IPaginationItem

export type IPaginationCursor = typeof NextUIPaginationCursor
export const PaginationCursor = extendVariants(NextUIPaginationCursor, {}) as IPaginationCursor

/* ------------------------------- USER ----------------------------- */
export type IUser = typeof NextUIUser
export const User = extendVariants(NextUIUser, {}) as unknown as IUser

/* ------------------------------- AVATAR ----------------------------- */
export type IAvatar = typeof NextUIAvatar
export const Avatar = extendVariants(NextUIAvatar, {}) as IAvatar

export type IAvatarGroup = typeof NextUIAvatarGroup
export const AvatarGroup = extendVariants(NextUIAvatarGroup, {}) as IAvatarGroup

export type IAvatarIcon = typeof NextUIAvatarIcon
export const AvatarIcon = extendVariants(NextUIAvatarIcon, {}) as IAvatarIcon
