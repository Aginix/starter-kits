import { Box, Container, Link, Stack, Typography } from '@mui/material'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import type { ReactNode } from 'react'

function ContactItem({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'text.secondary' }}>
      <Box sx={{ display: 'inline-flex', color: 'info.main' }}>{icon}</Box>
      <Typography variant="body2">{children}</Typography>
    </Stack>
  )
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 5 } }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
              สำนักบริหารข้อมูลดิจิทัลฯ — KMITL Data Management Center (KDMC)
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: 'flex-start', mt: 0.5, color: 'text.secondary' }}
            >
              <PlaceOutlinedIcon fontSize="small" sx={{ mt: '2px', color: 'info.main' }} />
              <Typography variant="body2">
                อาคารเฉลิมพระเกียรติ (สำนักการเรียนรู้ตลอดชีวิต KLLC) ชั้น 2
              </Typography>
            </Stack>
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 3 }}
            sx={{ flexWrap: 'wrap', rowGap: 1.5 }}
          >
            <ContactItem icon={<ChatBubbleOutlineOutlinedIcon fontSize="small" />}>
              LINE:{' '}
              <Link
                href="https://line.me/R/ti/p/@kdmc"
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ color: 'info.main' }}
              >
                @kdmc
              </Link>
            </ContactItem>
            <ContactItem icon={<EmailOutlinedIcon fontSize="small" />}>
              <Link href="mailto:kdmc@kmitl.ac.th" underline="hover" sx={{ color: 'info.main' }}>
                kdmc@kmitl.ac.th
              </Link>
            </ContactItem>
            <ContactItem icon={<LocalPhoneOutlinedIcon fontSize="small" />}>
              091-190-6000 · โทร. 02-329-8000 ต่อ 6000
            </ContactItem>
          </Stack>

          <ContactItem icon={<AccessTimeOutlinedIcon fontSize="small" />}>
            เวลาทำการ: จันทร์–ศุกร์ 08:30–16:30 น. (ยกเว้นวันหยุดราชการและวันหยุดนักขัตฤกษ์)
          </ContactItem>
        </Stack>
      </Container>
    </Box>
  )
}
